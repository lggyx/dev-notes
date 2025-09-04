package com.lggyx.service.impl;

import com.lggyx.mapper.DeptMapper;
import com.lggyx.pojo.Dept;
import com.lggyx.service.DeptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class DeptServiceImpl implements DeptService {
    @Autowired
    DeptMapper deptMapper;
    @Override
    public List<Dept> list() {
        return deptMapper.list();
    }

    @Override
    public boolean delete(Integer id) {
        return deptMapper.delete(id) > 0;
    }

    @Override
    public boolean add(Dept dept) {
        dept.setCreateTime(LocalDateTime.now());
        dept.setUpdateTime(LocalDateTime.now());
        return deptMapper.add(dept) > 0;
    }

    @Override
    public Dept get(Integer id) {
        return deptMapper.get(id);
    }

    @Override
    public boolean update(Dept dept) {
        dept.setUpdateTime(LocalDateTime.now());
        return deptMapper.update(dept) > 0;
    }
}
