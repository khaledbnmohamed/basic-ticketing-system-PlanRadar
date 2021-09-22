FROM ruby:2.7.1

RUN apt-get update


WORKDIR /app
COPY Gemfile* ./
RUN bundle install
#RUN bundle update
COPY . .


COPY ./docker-entrypoint.sh /home/ticketer/docker-entrypoint.sh
RUN chmod +x /home/ticketer/docker-entrypoint.sh

USER ${APP_USER}

# WORKDIR ${APP_PATH}


# Left for debugging
# CMD while true ; do sleep 1 ; done
