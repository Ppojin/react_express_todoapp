package com.multi.todoback.runner;

import com.multi.todoback.entity.Todo;
import com.multi.todoback.repo.TodoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DBrunner  implements ApplicationRunner {
    @Autowired private TodoRepo todoRepo;

    @Override
    public void run(ApplicationArguments args) throws Exception {
//        Todo todo = new Todo();
//        todo.setText("");
        todoRepo.save( Todo.builder().text("바나프레소").build() );
        todoRepo.save( Todo.builder().text("싸고").build() );
        todoRepo.save( Todo.builder().text("맛있어").checked(true).build() );
        todoRepo.save( Todo.builder().text("뿌뿌루삥뽕").build() );
    }
}
