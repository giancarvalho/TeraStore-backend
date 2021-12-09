--
-- PostgreSQL database dump
--

-- Dumped from database version 13.5 (Ubuntu 13.5-0ubuntu0.21.04.1)
-- Dumped by pg_dump version 13.5 (Ubuntu 13.5-0ubuntu0.21.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: address; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.address (
    id integer NOT NULL,
    street character varying(255) NOT NULL,
    number integer NOT NULL,
    complement character varying(255),
    zipcode character varying(8) NOT NULL,
    neighborhood character varying(255) NOT NULL,
    city character varying(255) NOT NULL,
    state_id integer NOT NULL
);


ALTER TABLE public.address OWNER TO postgres;

--
-- Name: address_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.address_id_seq OWNER TO postgres;

--
-- Name: address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: clients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clients (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    cpf character varying(11) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);


ALTER TABLE public.clients OWNER TO postgres;

--
-- Name: clients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clients_id_seq OWNER TO postgres;

--
-- Name: clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;


--
-- Name: order_product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_product (
    id integer NOT NULL,
    product_id integer NOT NULL,
    order_id integer NOT NULL,
    amount integer NOT NULL
);


ALTER TABLE public.order_product OWNER TO postgres;

--
-- Name: order_product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.order_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_product_id_seq OWNER TO postgres;

--
-- Name: order_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_product_id_seq OWNED BY public.order_product.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    client_id integer NOT NULL,
    address_id integer NOT NULL,
    "timestamp" timestamp without time zone DEFAULT '2021-11-12 18:47:07.633513'::timestamp without time zone NOT NULL,
    payment_id integer NOT NULL
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: payment_types; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payment_types (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.payment_types OWNER TO postgres;

--
-- Name: payment_types_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.payment_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.payment_types_id_seq OWNER TO postgres;

--
-- Name: payment_types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payment_types_id_seq OWNED BY public.payment_types.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price numeric(11,2) NOT NULL,
    category_id integer NOT NULL,
    image text NOT NULL,
    stock integer NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_category_id_seq OWNER TO postgres;

--
-- Name: products_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_category_id_seq OWNED BY public.products.category_id;


--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: public.payment_types; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."public.payment_types" (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public."public.payment_types" OWNER TO postgres;

--
-- Name: public.payment_types_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."public.payment_types_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."public.payment_types_id_seq" OWNER TO postgres;

--
-- Name: public.payment_types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."public.payment_types_id_seq" OWNED BY public."public.payment_types".id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token character varying(255) NOT NULL,
    client_id integer NOT NULL
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- Name: sessions_client_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sessions_client_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessions_client_id_seq OWNER TO postgres;

--
-- Name: sessions_client_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sessions_client_id_seq OWNED BY public.sessions.client_id;


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessions_id_seq OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: states; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.states (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.states OWNER TO postgres;

--
-- Name: states_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.states_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.states_id_seq OWNER TO postgres;

--
-- Name: states_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.states_id_seq OWNED BY public.states.id;


--
-- Name: address id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: clients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


--
-- Name: order_product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_product ALTER COLUMN id SET DEFAULT nextval('public.order_product_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: payment_types id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment_types ALTER COLUMN id SET DEFAULT nextval('public.payment_types_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: products category_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN category_id SET DEFAULT nextval('public.products_category_id_seq'::regclass);


--
-- Name: public.payment_types id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."public.payment_types" ALTER COLUMN id SET DEFAULT nextval('public."public.payment_types_id_seq"'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: sessions client_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions ALTER COLUMN client_id SET DEFAULT nextval('public.sessions_client_id_seq'::regclass);


--
-- Name: states id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.states ALTER COLUMN id SET DEFAULT nextval('public.states_id_seq'::regclass);


--
-- Data for Name: address; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.address (id, street, number, complement, zipcode, neighborhood, city, state_id) FROM stdin;
15	Rua Presidente Costa e Silva, 2499	1	fff	36037000	fff	Juiz de Fora	40
17	Av Getulho Vargas	4		fdf	juiz de fora	12352678	49
18	Rua Ana Penha Barcelos, 218	3		29125080	teste	VIla Velha	28
19	Rua Ana Penha Barcelos, 218	11		29125080	dfd	VIla Velha	28
20	Teste	3		26000000	Teste	TEste	27
21	Av. Duque de Caxias	23		75675000	teste	Corumbaíba	35
22	Teste	24		26000000	teste	TEste	27
23	Dont know	2		26777000	Centro	Rio de Janeiro	46
24	Rua Presidente Costa e Silva, 2499	1		36037000	tesste	Juiz de Fora	40
25	Rua Presidente Costa e Silva, 2499	23		36037000	teste	Juiz de Fora	42
26	Rua preseidente, 45	1	36037000		Sao Pedro	juiz de fora	40
27	Teste	26		36777000	Teste	200	45
28	teste	320	tegs	55544400	dfdf	fdfdf	41
29	TEste	2	Teste	36000000	teste	teste	43
30	teste	30		55555555	teste	teste	28
31	Teste	25	Teste	36000055	teste	teste	27
32	Teste	40		36777000	test	test	27
33	teste	40	teste	36755000	test	teste	28
34	Teste	14		36037000	Dont know	Dont know	42
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name) FROM stdin;
2	keyboards
5	HD, SSD & Storage
6	Monitors
7	Printers, Ink & Toners
8	Computer Accessories
9	Laptops & Desktops
\.


--
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clients (id, name, cpf, email, password) FROM stdin;
1	testonaldo	01102203344	testonaldo@example.com	123456
4	ldkfj	12345678969	giandcarvalho@gmail.com	$2b$10$SKSutaQfF8iKyU5KHilmXeDmNTk8tJ3SxJOBHfrGhuxprhcKwHJsy
5	okay@example.com	12345612325	teste@example.com	$2b$10$rb7wiCH8GcFPNpbMHHGv1uOIMBf79dbg82DWgEjxa8q49VotRIDAW
6	Teste	12345678921	teste@example.com	$2b$10$gsAB6btEauZewqYAutoI2eISOWZx3v.0E5nSx5vpowraGQJV2w.NC
7	Gian	12345678921	gian@example.com	$2b$10$u.eVLpXGnRUGVkJGp3kKPeKKjRngkzqOfOuswtaTZEQqbA7DK2OxS
8	teste	02265164151	dd@example.com	$2b$10$jtZRxSsehov7NO9RUAeRb.QIYOcCQiA.jV3Cjn7ZA7xgT1g3PMxp.
11	joao	12345678955	joao@example.com	$2b$10$2a2Nnb08WRB/aYt5Ra6Z8e1Z3n87.q8Qpb.2ixUU9NplEi5Tm2Rba
12	teste@example.com	02265164151	teste@email.com	$2b$10$1jxi/igyM8QXD/wPXZ8tauN6WceiewbonpLV7sk6lZTCxKn9U.xO2
13	testeee@example.com	12345678900	email@example.com	$2b$10$CSnq72pJndDcoRfmWCQbVeb8pm3KrL2wZu6eNDCC6S.W0mfyQRIpu
14	Nope	02265164151	nope@example.com	$2b$10$WiPi2Z1TNWf6HkP6JrkUyOtQvRkN3NjNjNDq92.6OGUTbyTTUphvW
15	teste	12345678966	ops@example.com	$2b$10$AF1jYTZCVKNZVvqjgwTWPuEUUQeMeHO6znSrAJQYe62aKU3wpfLB.
\.


--
-- Data for Name: order_product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.order_product (id, product_id, order_id, amount) FROM stdin;
82	1	39	1
83	2	39	2
84	2	40	4
85	2	40	4
86	2	40	4
87	1	41	1
88	1	42	1
89	1	43	1
90	1	44	1
91	1	45	1
92	1	46	1
93	2	47	4
94	2	47	4
95	2	47	4
96	1	48	2
97	1	49	2
98	2	49	1
99	1	50	2
100	2	51	4
101	2	51	4
102	2	51	4
103	3	55	3
104	3	56	3
105	3	57	3
106	3	58	3
107	3	59	3
108	3	60	3
109	4	60	3
110	3	61	3
111	5	61	3
112	3	62	3
113	3	62	3
114	3	63	3
115	6	63	3
116	1	64	1
117	2	64	1
118	3	64	3
119	6	65	2
120	4	66	1
121	5	66	1
122	1	67	3
123	2	67	5
124	6	67	1
125	5	67	1
126	4	68	14
127	5	69	2
128	6	70	1
129	5	71	1
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, client_id, address_id, "timestamp", payment_id) FROM stdin;
39	1	15	2021-11-12 18:47:07.633513	1
40	1	17	2021-11-12 18:47:07.633513	2
41	1	18	2021-11-12 18:47:07.633513	1
42	1	19	2021-11-12 18:47:07.633513	2
43	1	19	2021-11-12 18:47:07.633513	2
44	1	20	2021-11-12 18:47:07.633513	1
45	1	21	2021-11-12 18:47:07.633513	1
46	1	22	2021-11-12 18:47:07.633513	1
47	7	17	2021-11-12 18:47:07.633513	2
48	7	23	2021-11-12 18:47:07.633513	1
49	7	24	2021-11-12 18:47:07.633513	1
50	7	25	2021-11-12 18:47:07.633513	1
51	7	17	2021-11-12 18:47:07.633513	2
55	7	26	2021-11-12 18:47:07.633513	1
56	7	26	2021-11-12 18:47:07.633513	1
57	7	26	2021-11-12 18:47:07.633513	1
58	7	26	2021-11-12 18:47:07.633513	1
59	7	26	2021-11-12 18:47:07.633513	1
60	7	26	2021-11-12 18:47:07.633513	1
61	7	26	2021-11-12 18:47:07.633513	1
62	7	26	2021-11-12 18:47:07.633513	1
63	7	26	2021-11-12 18:47:07.633513	1
64	12	27	2021-11-12 18:47:07.633513	1
65	12	28	2021-11-12 18:47:07.633513	2
66	12	29	2021-11-12 18:47:07.633513	1
67	12	30	2021-11-12 18:47:07.633513	1
68	5	31	2021-11-12 18:47:07.633513	1
69	5	32	2021-11-12 18:47:07.633513	1
70	5	33	2021-11-12 18:47:07.633513	1
71	7	34	2021-11-12 18:47:07.633513	1
\.


--
-- Data for Name: payment_types; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payment_types (id, name) FROM stdin;
1	debit card
2	credit card
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, price, category_id, image, stock) FROM stdin;
3	Monitor LED AOC 21.5	250.00	6	https://i.zst.com.br/thumbs/12/1b/13/19223911.jpg	12
1	gforce mechanical keyboard	130.00	2	https://images-na.ssl-images-amazon.com/images/I/41CEcpt6x%2BL._SX500_SY500_CR,0,0,500,500_.jpg	0
2	razer mechanical keyboard	130.00	2	https://m.media-amazon.com/images/I/81ExPpHG9ZL._AC_SS450_.jpg	0
4	LED AOC 21.5	250.00	6	https://i.zst.com.br/thumbs/12/1b/13/19223911.jpg	0
6	LEED AOC 27.5	250.00	6	https://i.zst.com.br/thumbs/12/1b/13/19223911.jpg	13
5	LED AOC 27.5	250.00	6	https://i.zst.com.br/thumbs/12/1b/13/19223911.jpg	10
\.


--
-- Data for Name: public.payment_types; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."public.payment_types" (id, name) FROM stdin;
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions (id, token, client_id) FROM stdin;
1	d8015ac2-5768-4818-8566-73d866cdb358	4
2	14410cf3-8c3f-4e5d-96b2-09cf160fba70	5
3	6b777965-754a-49de-a708-48277efe6f07	7
4	f7363219-9cd6-4943-9c4e-1dffbe87a5fd	11
5	50be2a9f-33bb-464d-91d2-ca661ea240a7	12
\.


--
-- Data for Name: states; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.states (id, name) FROM stdin;
27	AC
28	AL
29	AP
30	AM
32	BA
33	CE
34	ES
35	GO
36	MA
37	MT
39	MS
40	MG
41	PA
42	PB
43	PR
44	PE
45	PI
47	RN
48	RS
49	RO
50	RR
51	SC
52	SP
53	SE
54	TO
55	DF
46	RJ
\.


--
-- Name: address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.address_id_seq', 34, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 9, true);


--
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clients_id_seq', 15, true);


--
-- Name: order_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_product_id_seq', 129, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 71, true);


--
-- Name: payment_types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payment_types_id_seq', 2, true);


--
-- Name: products_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_category_id_seq', 1, false);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 6, true);


--
-- Name: public.payment_types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."public.payment_types_id_seq"', 1, false);


--
-- Name: sessions_client_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sessions_client_id_seq', 1, false);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sessions_id_seq', 5, true);


--
-- Name: states_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.states_id_seq', 55, true);


--
-- Name: address address_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pk PRIMARY KEY (id);


--
-- Name: categories categories_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pk PRIMARY KEY (id);


--
-- Name: clients clients_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pk PRIMARY KEY (id);


--
-- Name: order_product order_product_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_product
    ADD CONSTRAINT order_product_pk PRIMARY KEY (id);


--
-- Name: orders orders_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pk PRIMARY KEY (id);


--
-- Name: payment_types payment_types_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment_types
    ADD CONSTRAINT payment_types_id PRIMARY KEY (id);


--
-- Name: public.payment_types payment_types_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."public.payment_types"
    ADD CONSTRAINT payment_types_pk PRIMARY KEY (id);


--
-- Name: products products_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pk PRIMARY KEY (id);


--
-- Name: sessions sessions_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pk PRIMARY KEY (id);


--
-- Name: states states_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.states
    ADD CONSTRAINT states_pk PRIMARY KEY (id);


--
-- Name: address address_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_fk0 FOREIGN KEY (state_id) REFERENCES public.states(id);


--
-- Name: order_product order_product_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_product
    ADD CONSTRAINT order_product_fk0 FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- Name: order_product order_product_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_product
    ADD CONSTRAINT order_product_fk1 FOREIGN KEY (order_id) REFERENCES public.orders(id);


--
-- Name: orders orders_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_fk0 FOREIGN KEY (client_id) REFERENCES public.clients(id);


--
-- Name: orders orders_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_fk1 FOREIGN KEY (address_id) REFERENCES public.address(id);


--
-- Name: orders orders_fk2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_fk2 FOREIGN KEY (payment_id) REFERENCES public.payment_types(id);


--
-- Name: products products_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_fk0 FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- Name: sessions sessions_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_fk0 FOREIGN KEY (client_id) REFERENCES public.clients(id);


--
-- PostgreSQL database dump complete
--

