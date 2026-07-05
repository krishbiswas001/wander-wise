# MERN Notes
# On Schema Types
१. Schema.Types.Object: एउटै फिल्डभित्र धेरै विवरण भएका डेटाको समूह (जस्तै: {"amount": 5000, "currency": "NPR"}) सेभ गर्न प्रयोग हुन्छ।
२. Schema.Types.ObjectId: अर्को कुनै टेबल (Collection) को २४-अक्षरको युनिक ID सेभ गरेर दुईवटा टेबललाई आपससमा लिंक (जोड्न) प्रयोग हुन्छ।
३. Schema.Types.Mixed: कुनै नियम नभएको एकदमै खुकुलो टाइप हो, जसमा नम्बर, अक्षर, वा अब्जेक्ट जस्तोसुकै डेटा पनि राख्न मिल्छ।

Object: Stores a group of multiple details (like {"amount": 50, "currency": "USD"}) in one field.

ObjectId: Stores another table's unique ID to link or connect two tables together.

Mixed: Offers complete flexibility to store any data type (numbers, strings, or objects) without rules.

# HTTP Status Codes

# 2XX->201, 202, 204, 205, 206 //SUCCESS

201-> Created: The request has been fulfilled and resulted in a new resource being created.

202-> Accepted: The request has been accepted for processing, but the processing has not been completed.

204-> No Content: The server successfully processed the request, but is not returning any content.  

- 206-> Partial Content: The server is delivering only part of the resource due to a range header sent by the client.


# 3XX->301, 302, 304, 307, 308 //REDIRECTION

301-> Moved Permanently: The requested resource has been assigned a new permanent URI and any future references to this resource should use one of the returned URIs.
> yesma permanent redirect huncha, tesaile POST request le GET ma convert hudaina, POST request nai pathauncha.

- 302-> Found: The requested resource resides temporarily under a different URI.


303-> See Other: The response to the request can be found under a different URI and should be retrieved using a GET method on that resource.
> yesma browser le automatically GET request pathauncha, tesaile POST request le GET ma convert huncha.
> yo vaneko temporary redirection ho tesma yadi user  webiste ma gayo but client transfer it to another site, tyo case ma 303 aauxa.


- 304-> Not Modified: Indicates that the resource has not been modified since the version specified by the request headers.

- 307-> Temporary Redirect: The requested resource resides temporarily under a different URI and the client should use the original URI for future requests.

# 4XX->400, 401, 403, 404, 405, 406 //APPLICATION ERROR

400-> Bad Request: The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). 


401-> Unauthorized: The request has not been applied because it lacks valid authentication credentials for the target resource.
> 401 ma aayo vaney , tyo resource ma access garna ko lagi valid authentication credentials chaincha, jasto ki username ra password.

403-> Forbidden: The server understood the request but refuses to authorize it.
> 403 ma aba user ley admin ko panel ma access garna khojda aauxa, tyo user ko lagi forbidden cha, tesaile server le access deny gardincha.

- 404-> Not Found: The server can't find the requested resource.
> 404 error aayo vaney , tyo resource server ma exist gardaina,

409-> Conflict: The request could not be completed due to a conflict with the current state of the target resource.
> euta kura exist garxa ani arko kura exist garna khojda aauxa, tyo case ma 409 error aauxa, jasto ki username already exist cha ani arko user le tyo username use garna khojda aauxa.

418-> I'm a teapot: The server refuses to brew coffee because it is, permanently, a teapot.
> This is a joke error code and is not a real error.
> it is defined in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers.
> 

422-> Unprocessable Entity: The server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions.    
> 422 error aayo vaney , tyo request ko content type ra syntax correct cha, tara tyo request ma kehi problem cha, jasto ki email format correct cha tara email already exist cha.


# 5XX->500, 501, 502, 503, 504, 505

500-> Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.
> error server side ma aayo, tesaile client le kehi garna mildaina, server le matra fix garna sakcha.

501-> Not Implemented: The server does not support the functionality required to fulfill the request.
> 501 ma implement nagareko feature ko request pathauda aauxa, 

502-> Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.
> yesma server le aru server sanga communicate garna khojda aru server le invalid response pathauda aauxa, 

503-> Service Unavailable: The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.
> service temporarily down cha, tesaile client le kehi garna mildaina, server le matra fix garna sakcha

- 504-> Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server specified by the URI (e.g., HTTP, FTP, LDAP) or some other auxiliary server (e.g., DNS) it needed to access in attempting to complete the request.

- 505-> HTTP Version Not Supported: The server does not support, or refuses to support, the HTTP protocol version that was used in the request message.