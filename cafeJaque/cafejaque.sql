-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-04-2018 a las 05:41:04
-- Versión del servidor: 10.1.28-MariaDB
-- Versión de PHP: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cafejaque`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial`
--

CREATE TABLE `historial` (
  `idHistorial` int(3) NOT NULL,
  `idUsuario` int(3) NOT NULL,
  `Monto` decimal(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orden`
--

CREATE TABLE `orden` (
  `idOrden` int(3) NOT NULL,
  `idUsuario` int(3) NOT NULL,
  `idCafe` int(3) NOT NULL,
  `Monto` decimal(6,2) NOT NULL,
  `descripcion` varchar(150) NOT NULL,
  `Hora` varchar(15) NOT NULL DEFAULT '10:50 am',
  `Completado` int(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `orden`
--

INSERT INTO `orden` (`idOrden`, `idUsuario`, `idCafe`, `Monto`, `descripcion`, `Hora`, `Completado`) VALUES
(1, 2, 2, '50.00', 'Prueba', '10:50 am', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idProducto` int(3) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Descripcion` varchar(500) NOT NULL,
  `Precio` decimal(6,2) NOT NULL,
  `idUsuario` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProducto`, `Nombre`, `Descripcion`, `Precio`, `idUsuario`) VALUES
(2, 'Jabon', '12kjbn,', '123.00', 0),
(3, 'Jabon', 'Jabon', '558.00', 0),
(4, 'carne', 'asada', '455.00', 0),
(5, 'Caca', 'Pedacito de popo', '15.00', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(3) NOT NULL,
  `tipoUsuario` int(2) NOT NULL DEFAULT '0',
  `Nombre` varchar(30) NOT NULL,
  `Apellidos` varchar(50) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `Password` varchar(500) NOT NULL,
  `nombreUsuario` varchar(50) NOT NULL DEFAULT '0',
  `Telefono` varchar(50) DEFAULT '0',
  `FechaRegistro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `DescripcionCafe` varchar(50) DEFAULT NULL,
  `Rate` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `tipoUsuario`, `Nombre`, `Apellidos`, `Correo`, `Password`, `nombreUsuario`, `Telefono`, `FechaRegistro`, `DescripcionCafe`, `Rate`) VALUES
(1, 0, 'Jorge', '', 'jorge@mail.com', '12345', 'JORGE', '4423698083', '2018-04-04 22:23:10', NULL, NULL),
(2, 1, 'pruebaAdmin', 'Admin', 'admin@mail.com', '12345', '0', '0', '2018-04-04 20:48:40', 'Se venden jochos', '4.9'),
(6, 0, 'pruebaUser', 'usuarioNormal', 'mail@mail.com', '12345', '0', '0', '2018-04-04 20:48:14', NULL, NULL),
(7, 0, 'Luis', 'Arcos', 'luis@mail.com', '12345', 'soy jorge', '4423311744', '2018-04-05 23:04:34', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `orden`
--
ALTER TABLE `orden`
  ADD PRIMARY KEY (`idOrden`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProducto`);

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
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idProducto` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
