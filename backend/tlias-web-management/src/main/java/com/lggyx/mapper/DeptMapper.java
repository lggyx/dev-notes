package com.lggyx.mapper;

import com.lggyx.pojo.Dept;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface DeptMapper {
//    @Select("select * from dept")
    List<Dept> list();

    int delete(Integer id);

    int add(Dept dept);

    Dept get(Integer id);

    int update(Dept dept);
}
