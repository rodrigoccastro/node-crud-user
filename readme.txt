run test: 
    npx jest tests/users/

run aplicaton and kill: 
    node server.js
    kill -9 $(ps aux | grep '\snode\s' | awk '{print $2}')

call endpoints: 
    call by postman
    {
        "info": {
            "_postman_id": "0ed9f18e-d11f-42ed-a668-30c7ac5e0411",
            "name": "NodeUser",
            "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
            "_exporter_id": "18158995"
        },
        "item": [
            {
                "name": "list",
                "request": {
                    "method": "GET",
                    "header": [],
                    "url": {
                        "raw": "http://localhost:3000/api/users",
                        "protocol": "http",
                        "host": [
                            "localhost"
                        ],
                        "port": "3000",
                        "path": [
                            "api",
                            "users"
                        ]
                    }
                },
                "response": []
            },
            {
                "name": "find",
                "request": {
                    "method": "GET",
                    "header": [],
                    "url": {
                        "raw": "http://localhost:3000/api/users/90d005fa-4fb3-404c-bb35-d7c394f5b28e",
                        "protocol": "http",
                        "host": [
                            "localhost"
                        ],
                        "port": "3000",
                        "path": [
                            "api",
                            "users",
                            "90d005fa-4fb3-404c-bb35-d7c394f5b28e"
                        ]
                    }
                },
                "response": []
            },
            {
                "name": "insert",
                "request": {
                    "method": "POST",
                    "header": [],
                    "body": {
                        "mode": "raw",
                        "raw": "{\n    \"name\": \"jose 123\",\n    \"email\": \"jose@email.com\",\n    \"age\": 50\n}",
                        "options": {
                            "raw": {
                                "language": "json"
                            }
                        }
                    },
                    "url": {
                        "raw": "http://localhost:3000/api/users",
                        "protocol": "http",
                        "host": [
                            "localhost"
                        ],
                        "port": "3000",
                        "path": [
                            "api",
                            "users"
                        ],
                        "query": [
                            {
                                "key": "name",
                                "value": "Jose 123",
                                "disabled": true
                            },
                            {
                                "key": "email",
                                "value": "jose@email.com",
                                "disabled": true
                            },
                            {
                                "key": "age",
                                "value": "50",
                                "disabled": true
                            }
                        ]
                    }
                },
                "response": []
            },
            {
                "name": "update",
                "request": {
                    "method": "PUT",
                    "header": [],
                    "body": {
                        "mode": "raw",
                        "raw": "{\n    \"name\": \"jose updated\",\n    \"email\": \"joseupdated@email.com\",\n    \"age\": 70\n}",
                        "options": {
                            "raw": {
                                "language": "json"
                            }
                        }
                    },
                    "url": {
                        "raw": "http://localhost:3000/api/users/1ec69164-c19d-4a06-9290-de4180f04d99",
                        "protocol": "http",
                        "host": [
                            "localhost"
                        ],
                        "port": "3000",
                        "path": [
                            "api",
                            "users",
                            "1ec69164-c19d-4a06-9290-de4180f04d99"
                        ]
                    }
                },
                "response": []
            },
            {
                "name": "delete",
                "request": {
                    "method": "DELETE",
                    "header": [],
                    "url": {
                        "raw": "http://localhost:3000/api/users/1ec69164-c19d-4a06-9290-de4180f04d99",
                        "protocol": "http",
                        "host": [
                            "localhost"
                        ],
                        "port": "3000",
                        "path": [
                            "api",
                            "users",
                            "1ec69164-c19d-4a06-9290-de4180f04d99"
                        ]
                    }
                },
                "response": []
            }
        ]
    }