import crypto from "crypto";
import fs from "fs";


const algorithm = "aes-256-cbc";


const secretKey =
crypto
.createHash("sha256")
.update(
process.env.ENCRYPTION_KEY ||
"pixelprotect_file_key"
)
.digest();



export function encryptFile(
inputPath:string,
outputPath:string
){


const iv =
crypto.randomBytes(16);


const cipher =
crypto.createCipheriv(
algorithm,
secretKey,
iv
);


const input =
fs.readFileSync(inputPath);


const encrypted =
Buffer.concat([
iv,
cipher.update(input),
cipher.final()
]);


fs.writeFileSync(
outputPath,
encrypted
);


}