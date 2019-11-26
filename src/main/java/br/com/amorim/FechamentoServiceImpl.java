package br.com.amorim;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FechamentoServiceImpl implements FechamentoService {

	@Autowired
	FechamentoRepository repository;
	
	Logger logger = LoggerFactory.getLogger(FechamentoServiceImpl.class);
	
	@Override
	public List<FechamentoEntity> findAll(){
		return repository.findAll();
	}

	@Override
	public void save(FechamentoEntity entity) {
		repository.save(entity);
	}

	@Override
	public List<FechamentoDTO> findAllDTO() {
		List<FechamentoEntity> entities = repository.findAll();
		List<FechamentoDTO> dtos = new ArrayList<FechamentoDTO>();
		for (FechamentoEntity entity : entities) {
			dtos.add(new FechamentoDTO(entity));
		}
		return dtos;
	} 
	
	@Override
	public void deleteAll() {
		repository.deleteAll();
	}
	
	@Override
	public void deleteById(Integer id) {
		logger.info("deletando pelo id: " + id);
		repository.deleteById(id);
	}
	
}
