package com.example.backend;

import java.time.LocalDate;

public class Ispiti {
    private int idI;
    private String sifra;
    private String student;
    private int ocena;
    private LocalDate datum;

    public Ispiti(int idI, String sifra, String student, int ocena, LocalDate datum) {
        this.idI = idI;
        this.sifra = sifra;
        this.student = student;
        this.ocena = ocena;
        this.datum = datum;
    }

    public String getSifra() {
        return sifra;
    }

    public void setSifra(String sifra) {
        this.sifra = sifra;
    }

    public String getStudent() {
        return student;
    }

    public void setStudent(String student) {
        this.student = student;
    }

    public int getIdI() {
        return idI;
    }

    public void setIdI(int idI) {
        this.idI = idI;
    }

    public int getOcena() {
        return ocena;
    }

    public void setOcena(int ocena) {
        this.ocena = ocena;
    }

    public LocalDate getDatum() {
        return datum;
    }

    public void setDatum(LocalDate datum) {
        this.datum = datum;
    }

    

    
}
