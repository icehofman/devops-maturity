CREATE TABLE devops.maturidade
(
    id SERIAL NOT NULL CONSTRAINT maturidade_id_pk PRIMARY KEY,
    numero   INTEGER,
    questao  TEXT,
    diretriz TEXT,
    pontos   INTEGER,
    grupo    TEXT,
    pilar    TEXT
);