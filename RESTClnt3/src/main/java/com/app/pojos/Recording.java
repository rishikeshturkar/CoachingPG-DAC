package com.app.pojos;

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
@Table(name = "records")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Recording {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer record_id;
	@NotNull private String course;
	@NotNull private String subject;
	@NotNull private String link;
}
