package com.example.backend;

public class Studenti {

    private String ime;
    private String prezime;
    private String indeks;
    private int godina;

    public Studenti(String ime, String prezime, String indeks, int godina) {
        this.ime = ime;
        this.prezime = prezime;
        this.indeks = indeks;
        this.godina = godina;
    }

    public String getIme() {
        return ime;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getPrezime() {
        return prezime;
    }

    public void setPrezime(String prezime) {
        this.prezime = prezime;
    }

    public String getIndeks() {
        return indeks;
    }

    public void setIndeks(String indeks) {
        this.indeks = indeks;
    }

    public int getGodina() {
        return godina;
    }

    public void setGodina(int godina) {
        this.godina = godina;
    }

    

    
    
}
