import { ConnectRouter } from '@bufbuild/connect'
import { InstallationService } from './gen/api/v1/api_connect'
import { EmptyResponse, GameEvent, RegisterArenaRequest } from './gen/api/v1/api_pb'

export default (router: ConnectRouter) =>
  router.service(InstallationService, {
    registerInstallation(request: RegisterArenaRequest): EmptyResponse {
      console.log('Fired');
      return new EmptyResponse();
    },
    notifyGameCreated(gameEvent: GameEvent): EmptyResponse {
      return new EmptyResponse();
    },
    notifyGameStarted(gameEvent: GameEvent): EmptyResponse {
      return new EmptyResponse();
    },
    notifyGameEnded(gameEvent: GameEvent): EmptyResponse {
      return new EmptyResponse();
    }
  })