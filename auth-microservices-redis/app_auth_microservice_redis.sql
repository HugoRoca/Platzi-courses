-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql
-- Tiempo de generación: 25-01-2022 a las 02:58:28
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `app_auth_microservice_redis`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth`
--

CREATE TABLE `auth` (
  `id` varchar(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `auth`
--

INSERT INTO `auth` (`id`, `userName`, `password`) VALUES
('FXFCHnkLnYJPvZvtnI-Bn', 'jchavez', '$2b$10$3O5BVWNaC6GFPd8O6gGq.uy9Uf1hBcT8fEwiflh8zF5unO8JK6vTG'),
('tzFTXBG_aGU7WTUs4_m1v', 'jchavez_1', '$2b$10$3MWEcB1rsXuxZynP0K361eDlqEkuIenZeg1NvYsGgP01u4g16voZ.'),
('wqZ1FE4yl1tCMCyN67D18', 'ukaren', '$2b$10$wYTY8xb/krcSpQOjvXD9uO9p0J8lPmoNG7U2f.o/Aof8QZmL39qRi');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post`
--

CREATE TABLE `post` (
  `id` varchar(50) NOT NULL,
  `text` text NOT NULL,
  `user` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `post`
--

INSERT INTO `post` (`id`, `text`, `user`) VALUES
('45E2aK8TVj6X1QBsw5-rf', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', 'tzFTXBG_aGU7WTUs4_m1v'),
('asdcxvc89dsf', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet massa rutrum, pretium lacus vel, porta ex. Aenean dignissim nisi eu posuere accumsan. Nullam gravida augue nec porta laoreet. Phasellus ac risus commodo, imperdiet enim vel, lobortis velit. Maecenas tincidunt est nec rutrum consequat. Ut non erat id arcu fringilla feugiat a vitae libero. Aenean feugiat vulputate mi. Sed vehicula lectus in mauris ultricies, sed dignissim erat euismod.', 'tzFTXBG_aGU7WTUs4_m1v'),
('BpUJQsidMmF8EwDVGooMN', 'asasasasasa', 'tzFTXBG_aGU7WTUs4_m1v');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` varchar(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `userName`, `name`) VALUES
('ncgYemDOPEdM7-nTO0RdM', 'hroca_1', 'hugo roca'),
('qpwoeasd', 'hroca', 'Hugo'),
('tzFTXBG_aGU7WTUs4_m1v', 'jchavez_1', 'jehidi chavez'),
('wqZ1FE4yl1tCMCyN67D18', 'ukaren', 'karen'),
('xxxxxx', 'xxppqqss', 'lo que sea');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_follow`
--

CREATE TABLE `user_follow` (
  `user_from` varchar(50) NOT NULL,
  `user_to` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `user_follow`
--

INSERT INTO `user_follow` (`user_from`, `user_to`) VALUES
('tzFTXBG_aGU7WTUs4_m1v', 'ncgYemDOPEdM7-nTO0RdM');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user_follow`
--
ALTER TABLE `user_follow`
  ADD UNIQUE KEY `user_from` (`user_from`,`user_to`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
