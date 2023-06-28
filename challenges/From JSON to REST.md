# From JSON to REST

1.  What is JSON?

JSON (JavaScript Object Notation) is a lightweight data interchange format that is widely used for representing structured data. It is a text-based format that is easy for humans to read and write, and it is also easy for machines to parse and generate.

  -Is JSON the same as a plain Javascript object?

JSON and a plain JavaScript object are similar in structure and syntax, but they are not exactly the same.

JSON (JavaScript Object Notation) is a data interchange format that is independent of any programming language.
  
2. What is REST?

REST (Representational State Transfer) is an architectural style and set of principles for designing networked applications, particularly web services. It provides a lightweight and scalable approach to building distributed systems that can be easily consumed by clients over the internet.

  -Is REST a programming language, framework, technology, or architecture pattern?

REST is an architectural style, not a programming language, framework, or technology. It is a set of principles and constraints that guide the design of networked applications and web services.

3.  What is a Resource in REST?

A resource refers to any entity or information that can be identified and manipulated through a unique URI (Uniform Resource Identifier). Resources are the central concept in RESTful systems and are the key entities that clients interact with.


  -What is a resource identifier?

A resource identifier, also known as a Uniform Resource Identifier (URI), is a string of characters that uniquely identifies a resource in a networked system, such as the web. It serves as an address or locator for the resource, allowing clients to access and interact with it.

4. How are HTTP and REST related?

HTTP provides the foundation for communication in RESTful systems, while REST leverages the HTTP protocol's methods, status codes, and features to design scalable and interoperable web services.

  -What HTTP methods does REST use within its architecture rules?

GET: Used to retrieve a representation of a resource or a collection of resources. It is a safe and idempotent operation, meaning multiple identical GET requests should have the same effect as a single request.

POST: Used to create a new resource on the server. It submits data to be processed by the server and typically results in the creation of a new resource. It is not idempotent, meaning multiple identical POST requests may lead to the creation of multiple resources.

PUT: Used to update or replace an existing resource. It sends the entire representation of the resource to be updated. PUT is idempotent, meaning multiple identical PUT requests should have the same effect as a single request.

DELETE: Used to delete a specific resource identified by its URI. It instructs the server to remove the specified resource. Like PUT, DELETE is also idempotent.

PATCH: Used to partially update an existing resource. It sends a set of changes to be applied to the resource, rather than sending the entire representation. The server applies the changes to the resource. PATCH is not always guaranteed to be idempotent.

OPTIONS: Used to request information about the communication options available for a resource or the server itself. It can be used to determine the allowed HTTP methods, supported content types, or other capabilities of the server.

  -Why do we use HTTP methods in REST and how do they relate to resources?

They provide a standardized and consistent way for clients to interact with resources within a RESTful architecture. Here's how they relate to resources:
  
5. Is REST the same as HTTP?
   
No, REST (Representational State Transfer) and HTTP (Hypertext Transfer Protocol) are not the same, but they are closely related.  
    
        
    
      
        
   
