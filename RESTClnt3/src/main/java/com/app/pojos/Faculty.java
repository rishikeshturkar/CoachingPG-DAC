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
@Table(name = "facultys")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Faculty {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer faculty_id;
	@NotNull @Column(length=50) private String name;
	@NotNull @Column(length=50,unique=true) private String email;
	@Column(length=50) private String password;
	@NotNull @Column(length=50) private String role="FACULTY";
	private String address;
	
	private String course1;
	private String course2;
	private String course3;
	
	}
