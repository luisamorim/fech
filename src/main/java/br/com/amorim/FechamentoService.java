package br.com.amorim;

import java.util.List;

public interface FechamentoService {

	List<FechamentoEntity> findAll();
	void save(FechamentoEntity entity);
	List<FechamentoDTO> findAllDTO();
	void deleteAll();
	void deleteById(Integer id);

}