-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-04-2018 a las 01:41:28
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mobilwasher`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordenes`
--

CREATE TABLE `ordenes` (
  `id_orden` int(6) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `pago` varchar(16) NOT NULL,
  `idUsuario` int(3) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `paquete` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ordenes`
--

INSERT INTO `ordenes` (`id_orden`, `direccion`, `pago`, `idUsuario`, `fecha`, `paquete`) VALUES
(13, 'calle 3', 'credito', 23, '2018-04-09 23:34:15', 2),
(14, 'calle 3', 'credito', 23, '2018-04-09 23:34:41', 2),
(15, 'gjvhb', 'efectivo', 23, '2018-04-09 23:37:07', 1),
(16, 'gcjvhkb', 'credito', 23, '2018-04-09 23:38:23', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursales`
--

CREATE TABLE `sucursales` (
  `idSucursal` int(3) NOT NULL,
  `nombreSucursal` varchar(50) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `dueño` varchar(200) NOT NULL,
  `telefono` varchar(50) NOT NULL DEFAULT '2-10-16-16',
  `horario` varchar(500) NOT NULL DEFAULT 'Jueves – Domingo 9:00 am – 6:00 pm',
  `rutaFoto` varchar(200) NOT NULL DEFAULT '../img/logo1.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sucursales`
--

INSERT INTO `sucursales` (`idSucursal`, `nombreSucursal`, `direccion`, `dueño`, `telefono`, `horario`, `rutaFoto`) VALUES
(1, 'AutosLocos', 'Cristóbal Colón, Tarimoro, MEX', 'Sr. Jesús', '15-123-16-87', 'Jueves – Domingo 9:00 am – 6:00 pm', '../img/logo1.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(6) NOT NULL,
  `Usuario` varchar(25) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `Password` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `Usuario`, `Correo`, `Password`) VALUES
(22, 'ramby', 'ramby@ramby.com', '12345'),
(23, 'jorge', 'jorge@mail.com', '12345');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  ADD PRIMARY KEY (`id_orden`);

--
-- Indices de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  ADD PRIMARY KEY (`idSucursal`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  MODIFY `id_orden` int(6) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  MODIFY `idSucursal` int(3) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(6) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
