package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "student")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer student_id;
	@NotNull @Column(length=50) private String name;
	@NotNull @Column(length=50,unique=true) private String email;
	@Column(length=50) private String password;
	@NotNull @Column(length=50) private String role="STUDENT";
	private String course;
	private int attendance;
	private String address;
}
