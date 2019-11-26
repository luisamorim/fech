package br.com.amorim;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class FechamentoBootstrap implements CommandLineRunner{

	Logger logger = LoggerFactory.getLogger(FechamentoBootstrap.class);
	
	
	@Autowired
	FechamentoService service;
	
	@Override
	public void run(String... args) throws Exception {
		logger.info("Fechamento Bootstrap");
		
	}
}
