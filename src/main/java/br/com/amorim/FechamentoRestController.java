package br.com.amorim;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/user/fechamentos")
public class FechamentoRestController {

	@Autowired
	FechamentoService service;
	
	@RequestMapping(path = "/save", 
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public void salvar(@RequestBody FechamentoEntity fechamento){
		service.save(fechamento);
	}
	
	
	@RequestMapping(path = "/finaAll", 
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public List<FechamentoEntity> findAll(){
		return service.findAll();
	}
	
	@RequestMapping(path = "/finaAllDtos", 
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public List<FechamentoEntity> findAllDtos(){
		return service.findAll();
	}
	
	@RequestMapping(path = "/deleteAll",method = RequestMethod.DELETE)
	public void deleteAll() {
		service.deleteAll();
	}
	
	
	@RequestMapping(path = "/delete/{id}",method = RequestMethod.DELETE)
	public void deleteById(@PathVariable Integer id) {
		service.deleteById(id);
	}
	
}
