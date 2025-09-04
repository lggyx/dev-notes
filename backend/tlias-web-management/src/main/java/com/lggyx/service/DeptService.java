package com.lggyx.service;

import com.lggyx.pojo.Dept;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DeptService {
    List<Dept> list();

    boolean delete(Integer id);

    boolean add(Dept dept);

    Dept get(Integer id);

    boolean update(Dept dept);
}
