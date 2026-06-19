FROM ghcr.io/kozea/radicale:stable

COPY config /etc/radicale/config
COPY rights /etc/radicale/rights
COPY users /etc/radicale/users
COPY contacts.json /contacts.json
COPY proxy.py /proxy.py

# Override the entrypoint to execute the python proxy wrapper directly
ENTRYPOINT ["python3", "/proxy.py"]
