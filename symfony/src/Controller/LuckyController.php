<?php
// src/Controller/LuckyController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class LuckyController {

  #[Route('/lucky/number')]
  public function numberHTML(): Response {
    $number = random_int(0, 100);
     return new Response(
        '<html><body>Lucky number: '.$number.'</body></html>'
    );
  }
  #[Route('/api/lucky/number')]
  public function number(): JsonResponse {
    $number = random_int(0, 100);
     return new JsonResponse(["number"=>$number]);
  }
}
