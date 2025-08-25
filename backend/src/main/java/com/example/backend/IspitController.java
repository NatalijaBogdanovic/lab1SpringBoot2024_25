package com.example.backend;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/ispit")
@CrossOrigin(origins = "http://localhost:4200/")
public class IspitController {


    @GetMapping("/prosekDatogStudenta/{brojIndeksa}")
    public double prosekDatogStudenta(@PathVariable String brojIndeksa){
        String ceoIndeks= brojIndeksa.substring(0, 4) + "/" + brojIndeksa.substring(4, 8);
        return new IspitRepo().izracunajProsekStudenta(ceoIndeks);

    }

    @PostMapping("/ispitiIzIntervala")
    public List<Ispiti> ispitiIzIntervala(@RequestBody Datumi datumi){
        return new IspitRepo().ispitiIzIntervala(datumi.getDatumOd(), datumi.getDatumDo());

    }

    @PostMapping("/dodajIspit")
    public List<Ispiti> dodajIspit(@RequestBody Ispiti ispit){
        return new IspitRepo().dodajIspit(ispit);

    }

}
