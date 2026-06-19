FROM ghcr.io/kozea/radicale:stable

COPY config /etc/radicale/config
COPY rights /etc/radicale/rights
COPY users /etc/radicale/users
COPY proxy.py /proxy.py

# Run the proxy wrapper which starts Radicale on port 8081 and serves API + proxy on port 8080
CMD ["python3", "/proxy.py"]
