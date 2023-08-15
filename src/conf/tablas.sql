CREATE TABLE `usuarios` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`cedula` VARCHAR(10) NOT NULL,
	`nombre` VARCHAR(50) NOT NULL,
	`apellido` VARCHAR(50) NOT NULL,
	`correo` VARCHAR(50) NOT NULL,
	`celular` VARCHAR(10) NOT NULL,
	`direccion` VARCHAR(100) NOT NULL,
	`carrera` VARCHAR(50) NOT NULL,
	`semestre` VARCHAR(50) NOT NULL,
	`foto` VARCHAR(100) NOT NULL,
	`saludo` VARCHAR(100) NOT NULL,
	`titulo` VARCHAR(100) NOT NULL,
	`estado` VARCHAR(1) NOT NULL DEFAULT 'A',
	PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_0900_ai_ci'
;