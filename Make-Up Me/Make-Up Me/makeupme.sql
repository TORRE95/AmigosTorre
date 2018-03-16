-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-03-2018 a las 04:52:43
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `makeupme`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estilistas`
--

CREATE TABLE `estilistas` (
  `idEstilista` int(3) NOT NULL,
  `Nombre` varchar(20) DEFAULT NULL,
  `Apellidos` varchar(50) DEFAULT NULL,
  `nombreTienda` varchar(100) DEFAULT NULL,
  `Ubicacion` varchar(100) NOT NULL DEFAULT 'Guanajuato',
  `Descripcion` varchar(1000) DEFAULT NULL,
  `Contacto` varchar(50) NOT NULL DEFAULT 'www.facebook.com',
  `Calificacion` decimal(2,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `estilistas`
--

INSERT INTO `estilistas` (`idEstilista`, `Nombre`, `Apellidos`, `nombreTienda`, `Ubicacion`, `Descripcion`, `Contacto`, `Calificacion`) VALUES
(1, 'Liliana', 'Osornio González', 'MakeUp Artist & Hairstyle', 'Guanajuato', 'Liliana Osornio Gonzalez , especialista en novias es una talentosa profesional que ofrece sus servicios para todas aquellas personas que deseen sacar su belleza natural a la luz y verse realmente bellas. Su especialidad son las novias, ya que conoce todos los secretos que se necesitan para un maquillaje de boda perfecto. No lo duden ni un segundo y confíen plenamente en la sensibilidad y creatividad de este gran maquillista.\nServicios que ofrece\n\nLiliana Osornio especialista en novias ofrece servicios de;\nPrueba de maquillaje y peinado\nAsesoría de imagen\nMaquillista Profesional, uso las mejores marcas: Atelier, Mac, Younique...Maquillaje social, novia, XV años, graduadas...Servicio a domicilio.4611777088', 'www.facebook.com', '4.5'),
(2, 'Katty ', 'Pyrre', 'Design Me', 'Celaya, Guanajuato', 'No necesitamos descripción, ya nos conoces. Somos los mejores del estado, ven y comprueba', 'www.facebook.com', '5.0'),
(3, 'Daniela', 'Serrato Ramírez', 'Major Make up', 'San Luis Potosí', 'Si desean lucir hermosas y radiantes eneventos sociales, la maquillista profesional Daniela Serrato les ofrecerá un servicio de calidad garantizada cuidando cada detalle. Para esta profesional, su belleza es sumamente importante, pues sabe que deben lucir hermosas y seguras.\nServicios que ofrece:\nDaniela Serrato pondrá a su disposición un excelente paquete de servicios para cualquier evento social. Cuentan con servicio para novias, XV años y eventos sociales. El trabajo de esta profesional es fino y bien cuidado. Cuentan con servicio de maquillaje en alta definición para las fotos y alto peinado. Incluye:\nAsesoría de imagen\nPrueba de maquillaje \nAplicación de pestañas postizas\nMaquillaje de larga duración\nLabiales indelebles\n', 'www.facebook.com', '4.8');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarjetas`
--

CREATE TABLE `tarjetas` (
  `idTarjeta` int(3) NOT NULL,
  `numTarjeta` int(16) NOT NULL,
  `fechaVencimiento` date NOT NULL,
  `CV` int(3) NOT NULL,
  `idUsuario` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(3) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Apellidos` varchar(50) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `Password` varchar(500) NOT NULL,
  `FechaRegistro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `Nombre`, `Apellidos`, `Correo`, `Password`, `FechaRegistro`) VALUES
(1, 'prueba', 'pruebas', 'prueba@mail.com', '12345', '2018-03-03 20:51:07'),
(2, 'Jorge', 'Rojas', 'jorge@mail.com', '12345', '2018-03-12 01:45:08'),
(3, 'Edgar', '', 'edgar@mail.com', '12345', '2018-03-12 14:29:53'),
(5, 'Fernando', '', 'fer@mail.com', '12345', '2018-03-12 14:30:45'),
(6, 'sam', '', 'sam@mail.com', '12345', '2018-03-12 14:32:16'),
(20, 'prueba2', '', 'mail@mail.com', '147', '2018-03-12 14:35:34'),
(21, '', '', '', '', '2018-03-12 14:35:50'),
(30, 'hgjk', '', 'hgjvbk@mail.com', 'a', '2018-03-12 14:36:58'),
(46, 'ya', '', 'ya@mail.com', 'ya', '2018-03-12 14:37:57'),
(47, 'lol', '', 'lol@mail.com', '147', '2018-03-12 14:39:27'),
(48, 'Ruben', '', 'undefined', '12345', '2018-03-15 08:12:09'),
(56, 'Roberto', '', 'rob@mail.com', '12345', '2018-03-15 08:42:09'),
(57, 'Omar', '', 'omi@mail.com', '12345', '2018-03-15 08:43:07');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estilistas`
--
ALTER TABLE `estilistas`
  ADD PRIMARY KEY (`idEstilista`);

--
-- Indices de la tabla `tarjetas`
--
ALTER TABLE `tarjetas`
  ADD PRIMARY KEY (`idTarjeta`),
  ADD UNIQUE KEY `numTarjeta` (`numTarjeta`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `Correo` (`Correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estilistas`
--
ALTER TABLE `estilistas`
  MODIFY `idEstilista` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `tarjetas`
--
ALTER TABLE `tarjetas`
  MODIFY `idTarjeta` int(3) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
