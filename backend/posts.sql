-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-07-2023 a las 22:17:49
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blog_bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `date` datetime NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `date`, `image`) VALUES
(25, 'Consejos para ir a la montaña con niños', 'Cuando los niños salen a la montaña a pasar un rato o unos días de vacaciones, el estar en contacto con la naturaleza es una experiencia que les favorece mucho. Este entorno es perfecto para que aprendan a conectar con el medio natural, ya que pueden interactuar libremente, sin normas, sin miedo a mancharse, y trabajando su propia autonomía.', '2023-07-03 18:13:09', 'fotos/imagen-1688400789762.jpg'),
(26, '¿Pueden viajar los niños solos en avión?', '\'En España y Europa, la edad mínima para que los niños viajen sin sus padres es de 5 años. Esta edad debe haberse superado en la fecha del viaje. Sin son menores de 5 años, aunque su cumpleaños esté cercano, no podrán volar en avión.', '2023-07-03 18:13:35', 'fotos/imagen-1688400815977.jpg'),
(27, 'Cómo hacer un rincón de lectura para niños', 'En el caso de un rincón de lecturas infantil, la tendencia es utilizar colchonetas, puffs y cojines para que los niños se sienten en el suelo. De esta forma pueden leer sentados, pero también tumbados bocarriba, bocabajo o de lado.\\r\\n\\r\\nLos rincones infantiles para leer son espacios que se pueden compartir con otras personas. Ya sea con un amigo, un hermano, o también con papá o mamá. Deben ser suficientemente amplios para que al menos 2 personas puedan usarlo, por ejemplo, para leer un cuento', '2023-07-03 18:13:54', 'fotos/imagen-1688400834570.jpg'),
(28, '¿Qué ropa poner a un bebé con fiebre?', 'Si hay algo en lo que coinciden todos los pediatras cuando nos enfrentamos a un bebé con fiebre es que es necesario vestirlo con ropa ligera. No importa si es pleno verano y hace mucho calor, o si estás en invierno y hace un frío que pela. El bebé con fiebre no tiene que taparse en exceso por muy enfermo que esté.', '2023-07-03 18:14:12', 'fotos/imagen-1688400852923.jpg'),
(29, '¿Por qué los bebés sacan la lengua?', 'Hay muchos motivos por los que los peques muestran la lengua o la tienen frecuentemente fuera. A veces es una simple llamada de atención, porque quieres jugar, o porque tienen hambre. En otras ocasiones podría darnos la clave para saber que un bebé tiene algún problema de desarrollo, una enfermedad o afección puntual.', '2023-07-03 18:14:38', 'fotos/imagen-1688400878754.jpg'),
(30, 'Cómo tratar la sudamina en bebés', 'Aunque este tipo de afección de la piel afecta igualmente a bebés, niños y adultos de todas las edades, es mucho más frecuente en recién nacidos y peques de corta edad. Suele ocurrir en verano, pero igualmente puede aparecer en invierno, ya que está relacionada con el sudor y con el roce de la ropa.', '2023-07-03 18:14:58', 'fotos/imagen-1688400898586.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
