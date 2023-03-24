import { ConnectRouter } from '@bufbuild/connect'
import { InstallationService } from './gen/api/v1/api_connect'
import { EmptyResponse, GameEvent, RegisterArenaRequest } from './gen/api/v1/api_pb'

export default (router: ConnectRouter) =>
  router.service(InstallationService, {
    registerInstallation(request: RegisterArenaRequest): EmptyResponse {
      console.log('[InstallationService][RegisterInstallation]');
      console.dir(request, { depth: 2 });
      return new EmptyResponse();
    },
    notifyGameCreated(gameEvent: GameEvent): EmptyResponse {
      console.log('[InstallationService][NotifyGameCreated]');
      console.dir(gameEvent, { depth: 2 });
      return new EmptyResponse();
    },
    notifyGameStarted(gameEvent: GameEvent): EmptyResponse {
      console.log('[InstallationService][NotifyGameStarted]');
      console.dir(gameEvent, { depth: 2 });
      return new EmptyResponse();
    },
    notifyGameEnded(gameEvent: GameEvent): EmptyResponse {
      console.log('[InstallationService][NotifyGameEnded]');
      console.dir(gameEvent, { depth: 2 });
      return new EmptyResponse();
    }
  })