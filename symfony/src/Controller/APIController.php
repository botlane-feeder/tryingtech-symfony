<?php
// src/Controller/APIController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class APIController extends AbstractController{

  #[Route('/api/roll-dice', name:"roll-dice", methods:["GET"])]
  public function rollDice(): JsonResponse {
    $number = random_int(2, 12);
    return new JsonResponse(["number"=>$number]);
  }
  #[Route('/api/calculate-primes', name:"prime-number", methods:["GET"])]
  public function calculatePrimes(Request $request): JsonResponse {
    // $limit = $this->getRequest()->query->getInt('limit');
    $limit = $request->query->getInt('limit');
    $primes = [];
    for ($num = 2; $num <= $limit; $num++) {
      $isPrime = true;
      for ($i = 2; $i <= \sqrt($num); $i++) {
        if ($num % $i === 0) {
          $isPrime = false;
        }
      }
      if ($isPrime) {
        $primes[] = $num;
      }
    }
    return new JsonResponse(["primes"=>$primes]);
  }
}
