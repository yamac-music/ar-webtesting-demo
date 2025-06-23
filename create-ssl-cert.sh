#!/bin/bash

# SSL証明書生成スクリプト

echo "🔐 SSL証明書を生成しています..."

# 証明書ディレクトリを作成
mkdir -p ssl

# プライベートキーを生成
openssl genrsa -out ssl/key.pem 2048

# 証明書署名要求（CSR）を生成
openssl req -new -key ssl/key.pem -out ssl/cert.csr -subj "/C=JP/ST=Tokyo/L=Tokyo/O=DevServer/CN=localhost"

# 自己署名証明書を生成
openssl x509 -req -in ssl/cert.csr -signkey ssl/key.pem -out ssl/cert.pem -days 365 \
  -extensions v3_req -extfile <(echo "
[v3_req]
keyUsage = keyEncipherment, dataEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names

[alt_names]
DNS.1 = localhost
DNS.2 = *.localhost
IP.1 = 127.0.0.1
IP.2 = ::1
")

# CSRファイルを削除
rm ssl/cert.csr

echo "✅ SSL証明書が生成されました:"
echo "   - ssl/cert.pem (証明書)"
echo "   - ssl/key.pem (秘密鍵)"
echo ""
echo "🚀 npm run dev でHTTPSサーバーを起動してください"