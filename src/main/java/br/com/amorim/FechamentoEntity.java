package br.com.amorim;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FechamentoEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer id;
	
	String descricao;
	String matriz;
	Boolean habilitarFixas;
	Integer quantidadeDezenas;
	Integer quantidadeFixas;
	
	public FechamentoEntity() {
		// TODO Auto-generated constructor stub
	}
	
	public FechamentoEntity(String descricao, String matriz, Boolean habilitarFixas,
			Integer quantidadeDezenas, Integer quantidadeFixas) {
		this.descricao = descricao;
		this.matriz = matriz;
		this.habilitarFixas = habilitarFixas;
		this.quantidadeDezenas = quantidadeDezenas;
		this.quantidadeFixas = quantidadeFixas;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getMatriz() {
		return matriz;
	}

	public void setMatriz(String matriz) {
		this.matriz = matriz;
	}

	public Boolean getHabilitarFixas() {
		return habilitarFixas;
	}

	public void setHabilitarFixas(Boolean habilitarFixas) {
		this.habilitarFixas = habilitarFixas;
	}

	public Integer getQuantidadeDezenas() {
		return quantidadeDezenas;
	}

	public void setQuantidadeDezenas(Integer quantidadeDezenas) {
		this.quantidadeDezenas = quantidadeDezenas;
	}

	public Integer getQuantidadeFixas() {
		return quantidadeFixas;
	}

	public void setQuantidadeFixas(Integer quantidadeFixas) {
		this.quantidadeFixas = quantidadeFixas;
	}
	
	
	
	
}
