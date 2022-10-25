//=== Codigo para criar ForeignKey ===//
  ALTER TABLE valuers 
  ADD FOREIGN KEY (id_product) 
  REFERENCES products(id)
  ;

// === Apagar coluna da tabela ===//
  ALTER TABLE <Nome_da_tabela> DROP COLUMN <Nome_da_coluna>;

//=== Adicionar coluna na tabela ===//
  ALTER TABLE <Nome_da_tabela> ADD <Nome_da_coluna> int(11)

//=== Deletar item da tabela ===//
  DELETE FROM <Nome_da_tabela> WHERE id = <id_do_produto_a_ser_deletado>; 

//=== Adicionar os produtos em suas ForeignKey ===//
  update valuers set id_product = '15' WHERE id = '1'



