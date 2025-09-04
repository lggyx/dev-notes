package com.lggyx.service.impl;

import com.lggyx.mapper.DeptMapper;
import com.lggyx.pojo.Dept;
import com.lggyx.service.DeptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeptServiceImpl implements DeptService {
    @Autowired
    DeptMapper deptMapper;
    @Override
    public List<Dept> list() {
        return deptMapper.list();
    }
}
