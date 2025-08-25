package com.example.backend;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class StudentRepo {

    public Studenti dohvatiStudentaPoIndeksu(String indeks) {
        try(Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from studenti where indeks=?");){
            stm.setString(1, indeks);
            ResultSet rs = stm.executeQuery();
            if(rs.next()){
                Studenti student = new Studenti(rs.getString("ime"), rs.getString("prezime"), rs.getString("indeks"), rs.getInt("godina"));
                return student;
            } 
        }
        catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;

    }
    
}
