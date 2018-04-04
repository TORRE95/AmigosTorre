-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-04-2018 a las 19:14:25
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
-- Base de datos: `busapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial`
--

CREATE TABLE `historial` (
  `idHistoria` int(3) NOT NULL,
  `ruta` varchar(10) NOT NULL,
  `importe` decimal(4,2) NOT NULL,
  `idUsuario` int(5) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `historial`
--

INSERT INTO `historial` (`idHistoria`, `ruta`, `importe`, `idUsuario`, `fecha`) VALUES
(1, 'Ruta A', '12.00', 13, '2018-04-04 16:58:23'),
(2, 'Ruta C', '9.50', 13, '2018-04-04 17:02:38'),
(3, 'Ruta C', '9.50', 13, '2018-04-04 17:03:46'),
(4, 'Ruta B', '8.00', 13, '2018-04-04 17:04:28'),
(5, 'Ruta B', '8.00', 13, '2018-04-04 17:05:12'),
(6, 'Ruta B', '8.00', 13, '2018-04-04 17:06:46'),
(7, 'Ruta B', '8.00', 13, '2018-04-04 17:07:09'),
(8, 'Ruta D', '15.00', 13, '2018-04-04 17:09:37');

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
  `Numero` varchar(20) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `Password` varchar(500) NOT NULL,
  `FechaRegistro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `Nombre`, `Apellidos`, `Numero`, `Correo`, `Password`, `FechaRegistro`) VALUES
(2, 'b', 'b', '1234', 'bmail.com', '123', '2018-04-03 21:55:39'),
(3, 'a1', 'a1', '12345', 'a1@mail.com', '123', '2018-04-03 21:56:21'),
(4, 'a2', 'a2', '123456', 'a2@mail.com', '123', '2018-04-03 21:57:27'),
(5, 'a3', 'a3', '1234567', 'a3', '123', '2018-04-03 21:57:59'),
(6, 'a4', 'a4', '123456789', 'a4', '123', '2018-04-03 21:58:37'),
(7, 'Fernando', 'Rincon', '2147483647', 'fernando@mail.com', '123', '2018-04-03 21:59:25'),
(8, 'Eduardo', 'Rincon', '2147483647', 'eduardo@mail.com', '123', '2018-04-03 22:00:01'),
(9, 'Alejandro', 'Rincon', '2147483647', 'alejandro@mail.com', '123', '2018-04-03 22:05:34'),
(10, 'Juan', 'Juan', '2147483647', 'juan@mail.com', '123', '2018-04-03 22:13:45'),
(11, 'ASHG', 'AHSGF', '2147483647', 'ASJHG@MAIL.COM', '123', '2018-04-03 22:15:25'),
(12, 'jhksd', 'iyugwe', '2147483647', 'iweyu@mail.com', '123', '2018-04-03 22:16:19'),
(13, 'Don', 'Amaya', '4423698083', 'don@mail.com', '123', '2018-04-03 22:18:37'),
(14, 'Noemi', 'A', '4422264212', 'noemi@mail.com', '123', '2018-04-03 22:19:57'),
(15, 'Juan Carlos', 'R', '4424469514', 'juanC@mail.com', '123', '2018-04-03 22:20:41');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `historial`
--
ALTER TABLE `historial`
  ADD PRIMARY KEY (`idHistoria`);

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
-- AUTO_INCREMENT de la tabla `historial`
--
ALTER TABLE `historial`
  MODIFY `idHistoria` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `tarjetas`
--
ALTER TABLE `tarjetas`
  MODIFY `idTarjeta` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
