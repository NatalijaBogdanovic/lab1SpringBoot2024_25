package com.example.backend;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class IspitRepo {

    public double izracunajProsekStudenta(String indeks) {
        // TODO Auto-generated method stub
        try(Connection conn= DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select avg(ocena) as prosek from ispiti where student=?"); ) {
            stm.setString(1, indeks);
            ResultSet rs=stm.executeQuery();
            if(rs.next()){
                return rs.getDouble("prosek");
            }
        }catch (SQLException e) {
            // TODO: handle exception
            e.printStackTrace();
        }
        return 0;
    }

    public List<Ispiti> ispitiIzIntervala(LocalDate datumOd, LocalDate datumDo){

        try(Connection conn= DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from ispiti where datum between ? and ?");){
            stm.setDate(1, Date.valueOf(datumOd));
            stm.setDate(2, Date.valueOf(datumDo));
            ResultSet rs=stm.executeQuery();
            List<Ispiti> ispiti= new ArrayList<>();
            while(rs.next()){
                Ispiti i= new Ispiti(rs.getInt("idI"),  rs.getString("sifra"), rs.getString("student"), rs.getInt("ocena"), rs.getDate("datum").toLocalDate());
                ispiti.add(i);
            }
            return ispiti;
        }catch(SQLException e){
            // TODO: handle exception
            e.printStackTrace();

        }

        return null;

    }

    public List<Ispiti> dodajIspit(Ispiti ispit) {
        try(Connection conn= DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from ispiti where student = ? and sifra=?");){
            stm.setString(1, ispit.getStudent());
            stm.setString(2, ispit.getSifra());
            ResultSet rs=stm.executeQuery();
            if(rs.next()){
                // Ispit already exists do update
                PreparedStatement updateStm = conn.prepareStatement("update ispiti set ocena=?, datum=? where student=? and sifra=?");
                updateStm.setInt(1, ispit.getOcena());//get ocena from the ispit object that was passed
                updateStm.setDate(2, Date.valueOf(ispit.getDatum()));//
                updateStm.setString(3, rs.getString("student")); // Use the existing student from the result set
                updateStm.setInt(4, rs.getInt("sifra"));
                updateStm.executeUpdate();
            }else{
                //Ispit does not exist, insert new
                PreparedStatement insertStm= conn.prepareStatement("insert into ispiti (sifra, student, ocena, datum) values (?, ?, ?, ?)");
                insertStm.setString(1, ispit.getSifra());
                insertStm.setString(2, ispit.getStudent());
                insertStm.setInt(3, ispit.getOcena());
                insertStm.setDate(4, Date.valueOf(ispit.getDatum()));
                insertStm.executeUpdate();

            }

            //dohvatamo sve ispite nakon dodavanja/azuriranja
            try(PreparedStatement allStm = conn.prepareStatement("select * from ispiti where student=?")) {
                allStm.setString(1, ispit.getStudent());
                ResultSet allRs = allStm.executeQuery();
                List<Ispiti> ispiti = new ArrayList<>();
                while(allRs.next()){
                    Ispiti i = new Ispiti(allRs.getInt("idI"), allRs.getString("sifra"), allRs.getString("student"), allRs.getInt("ocena"), allRs.getDate("datum").toLocalDate());
                    ispiti.add(i);
                }
                return ispiti;
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return null;
    }

}
