package br.com.amorim;

public class FechamentoDTO {

	Integer id;
	String descricao;
	Boolean habilitarFixas;
	Integer quantidadeDezenas;
	Integer quantidadeFixas;
	
	public FechamentoDTO() {
		
	}
	
	public FechamentoDTO(FechamentoEntity entity) {
		this.descricao = entity.getDescricao();
		this.habilitarFixas = entity.getHabilitarFixas();
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
