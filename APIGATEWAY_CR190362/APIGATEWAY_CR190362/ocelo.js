﻿namespace APIGATEWAY_CR190362
{
    public class ocelo
    {
        {
        "Routes": [
            {
                "DownstreamPathTemplate": "/api/productos",
                "DownstreamScheme": "https",
                "DownstreamHostAndPorts": [
                    {
                        "Host": "localhost",
                        "Port": 7170
                    }
                ],
                "UpstreamPathTemplate": "/productos",
                "UpstreamHttpMethod": ["Get"],
                "DownstreamHttpMethod": "Get",
                "SwaggerKey": "Productos",
                "RateLimitOptions": {
                    "ClientWhitelist": [],
                    "EnableRateLimiting": "True",
                    "Period": "1m",
                    "PeriodTimespan": 60,
                    "Limit": 100

                },
      
                "DownstreamPathTemplate": "/api/productos/{id}",
                "DownstreamScheme": "https",
                "DownstreamHostAndPorts": [
                    {
                        "Host": "localhost",
                        "Port": 7170
                    }
                ],
                "UpstreamPathTemplate": "/productos/{id}",
                "UpstreamHttpMethod": ["Get"],
                "DownstreamHttpMethod": "Get",
                "SwaggerKey": "Productos"
            },
            {
                "DownstreamPathTemplate": "/api/productos",
                "DownstreamScheme": "https",
                "DownstreamHostAndPorts": [
                    {
                        "Host": "localhost",
                        "Port": 7170
                    }
                ],
                "UpstreamPathTemplate": "/productos",
                "UpstreamHttpMethod": ["Post"],
                "DownstreamHttpMethod": "Post",
                "SwaggerKey": "Productos"
            },
            {
                "DownstreamPathTemplate": "/api/productos/{id}",
                "DownstreamScheme": "https",
                "DownstreamHostAndPorts": [
                    {
                        "Host": "localhost",
                        "Port": 7170
                    }
                ],
                "UpstreamPathTemplate": "/productos/{id}",
                "UpstreamHttpMethod": ["Put"],
                "DownstreamHttpMethod": "Put",
                "SwaggerKey": "Productos"
            },
            {
                "DownstreamPathTemplate": "/api/productos/{id}",
                "DownstreamScheme": "https",
                "DownstreamHostAndPorts": [
                    {
                        "Host": "localhost",
                        "Port": 7170
                    }
                ],
                "UpstreamPathTemplate": "/productos/{id}",
                "UpstreamHttpMethod": ["Delete"],
                "DownstreamHttpMethod": "Delete",
                "SwaggerKey": "Productos"
            },
            {
                "DownstreamPathTemplate": "/api/libros",
                "DownstreamScheme": "https",
                "DownstreamHostAndPorts": [
                    {
                        "Host": "localhost",
                        "Port": 7145
                    }
                ],
                "UpstreamPathTemplate": "/libros",
                "UpstreamHttpMethod": ["Get"],
                "DownstreamHttpMethod": "Get",
                "SwaggerKey": "Libros"
            },
            {
                "DownstreamPathTemplate": "/api/libros/{id}",
                "DownstreamScheme": "https",
                "DownstreamHostAndPorts": [
                    {
                        "Host": "localhost",
                        "Port": 7145
                    }
                ],
                "UpstreamPathTemplate": "/libros/{id}",
                "UpstreamHttpMethod": ["Get"],
                "DownstreamHttpMethod": "Get",
                "SwaggerKey": "Libros",
                "FileCacheOptions": {
                    "TtlSeconds": 60,
                    "Region": "default"
                }
            },
            {
                "DownstreamPathTemplate": "/api/libros",
                "DownstreamScheme": "https",
                "DownstreamHostAndPorts": [
                    {
                        "Host": "localhost",
                        "Port": 7145
                    }
                ],
                "UpstreamPathTemplate": "/libros",
                "UpstreamHttpMethod": ["Post"],
                "DownstreamHttpMethod": "Post",
                "SwaggerKey": "Libros"
            },
            {
                "DownstreamPathTemplate": "/api/libros/{id}",
                "DownstreamScheme": "https",
                "DownstreamHostAndPorts": [
                    {
                        "Host": "localhost",
                        "Port": 7145
                    }
                ],
                "UpstreamPathTemplate": "/libros/{id}",
                "UpstreamHttpMethod": ["Put"],
                "DownstreamHttpMethod": "Put",
                "SwaggerKey": "Libros"
            },
            {
                "DownstreamPathTemplate": "/api/libros/{id}",
                "DownstreamScheme": "https",
                "DownstreamHostAndPorts": [
                    {
                        "Host": "localhost",
                        "Port": 7145
                    }
                ],
                "UpstreamPathTemplate": "/libros/{id}",
                "UpstreamHttpMethod": ["Delete"],
                "DownstreamHttpMethod": "Delete",
                "SwaggerKey": "Libros"
            },
            {
                "GlobalConfiguration": {
                    "BaseUrl": "https://localhost:5000",
                    "FileCacheOptions": {
                        "TtlSeconds": 60,
                        "Region": "default"
                    },
                    "swaggerEndPoints": [
                        {
                            "Key": "Productos",
                            "Config": [
                                {
                                    "Name": "Productos API",
                                    "Scheme": "https",
                                    "Host": "localhost",
                                    "Port": 7228,
                                    "Path": "/swagger/v1/swagger.json"
                                }
                            ]
                        },
                        {
                            "Key": "Libros",
                            "Config": [
                                {
                                    "Name": "Libros API",
                                    "Scheme": "https",
                                    "Host": "localhost",
                                    "Port": 7145,
                                    "Path": "/swagger/v1/swagger.json"
                                }
                            ]
                        }
                    ],
                    "RateLimitOptions": {
                        "ClientWhitelist": [],
                        "EnableRateLimiting": "True",
                        "Period": "1m",
                        "PeriodTimespan": 60,
                        "Limit": 100
                    }
                }
            }
    }
    }
}
