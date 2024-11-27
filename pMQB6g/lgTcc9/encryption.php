<?php

/**
 * Class AES    对称加密
 * 对称加密算法在加密和解密时使用的是同一个秘钥；而非对称加密算法需要两个密钥来进行加密和解密，
 * 这两个秘钥是公开密钥（public key，简称公钥）和私有密钥（private key，简称私钥）。
 */
class AES
{
    //设置AES秘钥
    private static $aes_key = 'bUYJ3nTV6VBasdJF'; //此处填写前后端共同约定的秘钥

    /**
     * 加密
     * @param string $str    要加密的数据
     * @return bool|string   加密后的数据
     */
    static public function encrypt($str) {

        $data = openssl_encrypt($str, 'AES-128-ECB', self::$aes_key, OPENSSL_RAW_DATA);
        $data = base64_encode($data);

        return $data;
    }

    /**
     * 解密
     * @param string $str    要解密的数据
     * @return string        解密后的数据
     */
    static public function decrypt($str) {

        $decrypted = openssl_decrypt(base64_decode($str), 'AES-128-ECB', self::$aes_key, OPENSSL_RAW_DATA);
        return $decrypted;
    }
}
$json=file_get_contents('page.json');
//print_r($json);
//$file=fopen("mainPage.txt","w");
//fwrite($file,AES::encrypt($json));
//fclose($file);

//加密的字符串
$encode_string = $json;
$decode_asc = AES::encrypt($encode_string);
print_r("加密字符串：". $encode_string);
print_r("加密后字符串：".$decode_asc);

//解密：
print_r('解密字符串：\n'.AES::decrypt($decode_asc));
