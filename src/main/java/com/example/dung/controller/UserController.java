package com.example.dung.controller;

import com.example.dung.model.User;
import com.example.dung.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(path = "/api")
public class UserController {
    @Autowired
    UserRepository userRepository;

    //get all
    @GetMapping("/users")
    public List<User> getAll() {
        return userRepository.findAll();
    }

    // tao moi
    // khong can id vi id luc tao tu dong gen
    @PostMapping("/users")
    public User create(@RequestBody User user) {
        return userRepository.save(user);
    }

    // cap nhat
    // can truyen tat ca len
    // ham save nay co id thi no se la cap nhat
    @PutMapping("/users")
    public User update(@RequestBody User user) {
        return userRepository.save(user);
    }

    @DeleteMapping("users/{id}")
    public void delete(@PathVariable int id) {
        userRepository.deleteById(id);
        return;
    }
}
