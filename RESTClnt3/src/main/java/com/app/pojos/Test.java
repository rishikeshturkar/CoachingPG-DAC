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
@Table(name = "test")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Test {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long testId;
	private String course;
	private String topic;
	@NotNull private String aq1;
	@NotNull private String ao1;
	@NotNull private String ao2;
	@NotNull private String ao3;
	@NotNull private String ao4;
	@NotNull private String ac1;
	@NotNull private String bq1;
	@NotNull private String bo1;
	@NotNull private String bo2;
	@NotNull private String bo3;
	@NotNull private String bo4;
	@NotNull private String bc1;
	@NotNull private String cq1;
	@NotNull private String co1;
	@NotNull private String co2;
	@NotNull private String co3;
	@NotNull private String co4;
	@NotNull private String cc1;
	@NotNull private String dq1;
	@NotNull private String do1;
	@NotNull private String do2;
	@NotNull private String do3;
	@NotNull private String do4;
	@NotNull private String dc1;
	@NotNull private String eq1;
	@NotNull private String eo1;
	@NotNull private String eo2;
	@NotNull private String eo3;
	@NotNull private String eo4;
	@NotNull private String ec1;
	@NotNull private String fq1;
	@NotNull private String fo1;
	@NotNull private String fo2;
	@NotNull private String fo3;
	@NotNull private String fo4;
	@NotNull private String fc1;
	@NotNull private String gq1;
	@NotNull private String go1;
	@NotNull private String go2;
	@NotNull private String go3;
	@NotNull private String go4;
	@NotNull private String gc1;
	@NotNull private String hq1;
	@NotNull private String ho1;
	@NotNull private String ho2;
	@NotNull private String ho3;
	@NotNull private String ho4;
	@NotNull private String hc1;
	@NotNull private String iq1;
	@NotNull private String io1;
	@NotNull private String io2;
	@NotNull private String io3;
	@NotNull private String io4;
	@NotNull private String ic1;
	@NotNull private String jq1;
	@NotNull private String jo1;
	@NotNull private String jo2;
	@NotNull private String jo3;
	@NotNull private String jo4;
	@NotNull private String jc1;
	
	
	

}
