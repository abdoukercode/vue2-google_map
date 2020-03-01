<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class StoreLocatorController extends AbstractController
{
    /**
     * @Route("/store/locator", name="store_locator")
     */
    public function index()
    {
        return $this->render('store_locator/index.html.twig', [
            'controller_name' => 'StoreLocatorController',
        ]);
    }
}
