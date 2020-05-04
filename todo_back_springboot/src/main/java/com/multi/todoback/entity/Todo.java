package com.multi.todoback.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@AllArgsConstructor @NoArgsConstructor
@Getter @Setter @Builder
@EqualsAndHashCode
@DynamicInsert
public class Todo {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(insertable = false, updatable=false)
    private Long id;

    @Column(unique = false)
    @NotBlank
    private String text;

    @Column(unique = false, columnDefinition = "boolean default false")
    private Boolean checked;
}
