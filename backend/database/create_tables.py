from database.database import Base, engine
from models.profissional import Profissional  # aqui pode importar pois não vai causar recursão

print("Criando tabelas no banco de dados...")
Base.metadata.create_all(bind=engine)
print("Tabelas criadas com sucesso.")
