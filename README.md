# elk-stack

✓ SOBRESCREVER CONSOLE.LOG

✓ ADICIONAR ARQUIVO PARA IMPORTAR PAINEL KIBANA

✓ PREPARAR AMBIENTE PARA TESTE DE STRESS/GERADOR DE LOGS PARA POPULAR PAINEL KIBANA

✓ COLOCAR VERIFICACAO STATUS/EVENTS DO MATHEUS E JEAN

✗ INSTALAR APM

✗ INSTALAR OUTROS TIPOS DE BEATS

✓✗ FAZER README EXPLICANDO COMO INSTALAR/CONFIGURAR AS COISAS

✗ CONFIGURAR AMBIENTE PARA LIMITAR USO DE MEMÓRIA, ELK OCUPA MUITA MEMÓRIA.

✗ FAZER POST MEDIUM

Padrão ECS
https://www.elastic.co/guide/en/ecs-logging/overview/master/intro.html

Tipos de Beats 
https://www.elastic.co/guide/en/beats/libbeat/7.11/beats-reference.html

Event listener log
https://medium.com/dailyjs/how-to-prevent-your-node-js-process-from-crashing-5d40247b8ab2


### Subir
```
docker-compose up --build
```

### Parar
```
docker-compose down -v
```

## Consultar devtools kibana
```
  // http://localhost:5601/app/dev_tools#/console

  // Buscar indices existentes
    GET /_cat/indices

  // Verificar se os logs estão sendo gravados no nosso indice
    GET /log-beats/_search
    {
      "query": {
        "match_all": {}
      }
    }

  // Deletar nosso indice
    DELETE /log-beats*
```


## Visualizar logs em dashboard kibana 
```
  // Criar index pattern - Menu -> Stack Management -> Index Patterns
    http://localhost:5601/app/management/kibana/indexPatterns
    Index pattern name = log-beats*
    timefield = @timestamp

  // Importar painel kibana - Menu -> Stack Management -> Saved objects
    http://localhost:5601/app/management/kibana/objects
    Import -> Select a file to import "selecione o arquivo dashboard_kibana.ndjson presente neste repositório"

  // Acessar painel de dashboards e selecionar painel importado
    http://localhost:5601/app/dashboards#/
```


# Implementar futuramente...

## Coleta com vários beats diferentes, log, métricas, pacotes...
![image](https://user-images.githubusercontent.com/26337543/112995401-8f6b2e80-9141-11eb-9232-b00e6096d493.png)

## Coleta com vários servidores/máquinas/serviços diferentes...
![image](https://user-images.githubusercontent.com/26337543/112995417-95610f80-9141-11eb-87f4-9797c0ec4d08.png)

## Uso de outros serviços para melhorar a estrutura...
![image](https://user-images.githubusercontent.com/26337543/112995433-98f49680-9141-11eb-9072-628a9ac61dc2.png)
