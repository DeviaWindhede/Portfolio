import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ecs',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './ecs.component.html',
  styleUrl: './ecs.component.scss'
})
export class EcsComponent {
  readonly codeContainer = [
    `
    void someFunc() {

    }
    `,
    `
    typedef unsigned long int cid_t;

    template<typename T>
    class ComponentContainer;

    template <typename Derived>
    struct Component
    {
    private:
      friend class ComponentManager;
      friend class ComponentContainer<Derived>;
      static cid_t componentId;
    public:
      Component() = default;
    private:
      Component(const Component& aComponent) = default;
      Component& operator=(const Component& aComponent) = default;
    };

    template <typename Derived>
    cid_t Component<Derived>::componentId = 0;
    `,
    `
    class EntityManager
    {
      void Reset();
      Entity CreateEntity();
      Entity CreateEntityAtID(const Entity aEntity);
      void DestroyEntity(const Entity aEntity);
    }
    `
  ];
}
