package com.example.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:4200/")
public class StudentController {

    @GetMapping("/dohvatiStudenta/{brojIndeksa}")
    public Studenti dohvatiStudenta(@PathVariable String brojIndeksa) {
        String ceoIndeks= brojIndeksa.substring(0, 4) + "/" + brojIndeksa.substring(4, 8);
        return new StudentRepo().dohvatiStudentaPoIndeksu(ceoIndeks);
    }
    
    
}
