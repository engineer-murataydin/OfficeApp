/* global angular*/
/* global ionic */
(function() {
    'use strict';

    angular
        .module('module.contact')
        .directive('contact', contact);

    contact.$inject = ['$ionicModal'];

    function contact($ionicModal) {
        return {
            restrict: 'EA',
            template: '',
            templateUrl: 'common/features/information/information.html',
            replace: false,
            controllerAs: 'izg',
            scope: {
                galleryId: '=',
                images: '='
            },
            link: function(scope, element, attr) {
                // console.log(scope, element, attr);
            },
            controller: function($scope) {

                // Get the information page from template
                $ionicModal.fromTemplateUrl('my-modal.html', {
                    scope: $scope,
                    animation: 'slide-in-up'
                }).then(function(modal) {
                    $scope.modal = modal;
                });

                // Show information template
                $scope.openModal = function() {
                    $scope.modal.show();
                };

                // Close information page
                $scope.closeModal = function() {
                    $scope.modal.hide();
                };

                // Cleanup the modal when we're done with it!
                $scope.$on('$destroy', function() {
                    $scope.modal.remove();
                });

                // Execute action on hide modal
                $scope.$on('modal.hidden', function() {
                    // Execute action
                });

                // Execute action on remove modal
                $scope.$on('modal.removed', function() {
                    // Execute action
                });
            }
        };
    }
})();