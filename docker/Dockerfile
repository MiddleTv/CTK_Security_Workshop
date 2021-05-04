FROM postgres:12.6-alpine
ENV POSTGRES_USER ctkusr
ENV POSTGRES_PASSWORD ctkpw
ENV POSTGRES_DB the_db
ADD init.sql /docker-entrypoint-initdb.d
EXPOSE 5432
