package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "course")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Course {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer course_id;
	@Column(unique=true)
	private String courseName;
	private double course_fee;
	private int course_duration;

}
