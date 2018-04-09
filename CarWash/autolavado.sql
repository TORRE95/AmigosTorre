-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-03-2018 a las 03:33:38
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `autolavado`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordenes`
--

CREATE TABLE `ordenes` (
  `id_orden` int(6) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `entre_calles` varchar(200) NOT NULL,
  `caracteristica` varchar(200) NOT NULL,
  `pago` varchar(16) NOT NULL,
  `cliente` varchar(25) NOT NULL,
  `fecha` date NOT NULL,
  `paquete` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ordenes`
--

INSERT INTO `ordenes` (`id_orden`, `direccion`, `entre_calles`, `caracteristica`, `pago`, `cliente`, `fecha`, `paquete`) VALUES
(8, 'GNULinux', 'Kali y Parrot', 'Open Source', 'otro', 'ramby', '2018-03-30', 3),
(9, 'Sillicon Valley', 'Facebook ', 'Money Money Money', 'credito', 'ramby', '2018-03-30', 1),
(10, 'Sillicon Valley', 'Facebook ', 'Money Money Money', 'credito', 'ramby', '2018-03-30', 1),
(11, 'La unica de Cortazar', 'No hay mas', 'Es una casa con vacas', 'otro', 'ramby', '2018-03-30', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(6) NOT NULL,
  `usuario` varchar(25) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contrasena` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `usuario`, `correo`, `contrasena`) VALUES
(14, 'prueba', 'prueba.com', 'hola'),
(15, 'prueba2', 'prueba.com', 'hola'),
(16, 'prueba3', 'prueba.com', 'hola'),
(17, 'prueba4', 'prueba.com', 'hola'),
(18, 'prueba5', 'prueba.com', 'hola'),
(22, 'ramby', 'ramby@ramby.com', '12345');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  ADD PRIMARY KEY (`id_orden`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  MODIFY `id_orden` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
